import { decrypt } from "@/app/lib/session";
import prisma from "./prismaConnection";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const cookie = req.headers.cookie?.split('; ').find(c => c.startsWith('session='))?.split('=')[1];
        if (!cookie) {
            return res.status(401).json({ success: false, message: "No session cookie found" });
        }
        try {
            
            const sessionPayload = await decrypt(cookie);
            const userID = sessionPayload?.userId;

            if (!userID) {  
                return res.status(401).json({ success: false, message: "Invalid session data" });
            }
            

            const userData = await prisma.user.findUnique({
                where: { id: userID },
                select: { id: true, email: true },
            });
            console.log("User data:", userData);

            if (!userData) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            

            return res.status(200).json({ success: true, data: userData });
        } catch (error) {
            console.error("Error processing request:", error);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    } else {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
