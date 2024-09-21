const httpStatus = require("http-status")
const servicesModel = require("../models/servicesModel")

const router = require("express").Router()

router.post("/addServices" , async(req , res)=>{
    const {name , description , price} = req.body
    if(!name || !description || !price){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fil all field"})
    }
    try {
        await servicesModel.create({ name, description, price });
        return res.status(httpStatus.CREATED)
          .json({ message: "Service added successfully" });
      } catch (error) {
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Error adding service", error: error.message });
      }
})

router.get("/getServices", async (req, res) => {
    try {
      const services = await servicesModel.find();
      return res.status(httpStatus.OK).json(services);
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error fetching services", error: error.message });
    }
  });

router.get("/getPerticulerServices/:id" , async(req , res)=>{
    try {
        const id =req.params.id;
        const services = await servicesModel.findById({_id:id})
        if (!services) {
            return res.status(404).json({ message: "services not found" });
        }
        return res.status(httpStatus.OK).json(services)
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"fetching error"})
    }
})

  router.put("/updateServices/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedService = await servicesModel.findByIdAndUpdate({_id:id} , {name:req.body.name , description:req.body.description , price:req.body.price });
        if (!updatedService) {
            return res.status(httpStatus.NOT_FOUND).send({ message: "Service not found" });
        }
        return res.status(httpStatus.OK).json(updatedService); 
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Error updating service" });
    }
});

router.delete("/deleteServices/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const deleteServices = await servicesModel.findByIdAndDelete({_id:id})
        return res.status(httpStatus.OK).json(deleteServices)
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message:"fetching error"})
    }
})

module.exports=router