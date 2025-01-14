import prisma from "./prismaConnection";


//handler for checking if data provided in first step of registration process are valid
export default async function handler(req, res) {

  if (req.method === 'POST') {
    const {email} = req.body;
    //searching if there is already existing account with email provided from user
    try {
      const user = await prisma.user.findUnique({
        where: {
          email : email,
        },
        select: {
          email: true, 
        },
      })
      
      //checking for existing email 
      if (user && user.email === email) {
        res.status(401).json({ success: false, message: "User with provided email already exists" });
      } else {
        res.status(200).json({ success: true, message: "Correct data provided" });
      } 

    } catch (error) {
      console.log("There was a problem while processing your request:", error);
    }
  } else {
    return res.status(500).json({ success: false, message: "Problem with your request."})
  }
}