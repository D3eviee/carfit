import bcrypt from 'bcrypt'
import prisma from "./prismaConnection";

//handler for finishing onboarding process
//putting all date into correct databases and creating account for user
export default async function handler(req, res) {
    //collecting all data for creating account from context
    if (req.method === 'POST') {
      const {userEmail,
            userPassword, 
            businessCategory, 
            businessName, 
            businessOwnerName, 
            businessNumber, 
            businessPolicyAgreements,
            businessAddressStreet,
            businessAddressCity,
            businessAddresZipcode,
            teamSize,
            staff,
            workingDays,
            services
          } = req.body;
        
      //creating account
      try {
        //hasing password provided by user
        const hashedPassword =  await bcrypt.hash(userPassword, 10)

        //creating account for user
        const user = await prisma.user.create({
          data: {
            email : userEmail,
            password : hashedPassword,
          }
        })

        //creating data for bussines
        const business = await prisma.business.create({
          data: {
            email: userEmail,
            userPassword : userPassword,
            businessCategory: businessCategory,
            businessName : businessName,
            OwnerName : businessOwnerName,
            businessNumber : businessNumber,
            businessPolicyAgreements : businessPolicyAgreements,
            businessAddressStree : businessAddressStreet,
            businessAddressCity : businessAddressCity,
            businessAddresZipcode : businessAddresZipcode,
            teamSize : teamSize,
          }
        })

        //checking if creating account and putting all business data into database was sucessful
        if (business && user) {
          res.status(201).json({ success: true, message: "Account for your business successfully created"});
        } else {
          res.status(401).json({ success: false, message: "Account not created. There was a problem while creating your account." });
        } 
      }catch (error) {
        console.log("There was a problem while processing your request:", error);
      }
    } 
  }