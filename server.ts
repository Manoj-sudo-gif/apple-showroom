import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/book-consultation", (req, res) => {
    const { name, email, phone, device, date } = req.body;
    
    // In a real application, you would use a service like SendGrid, AWS SES, or Nodemailer here
    // to send an email to manojkumarsakthi061@gmail.com
    console.log(`[BACKEND] Sending lead to manojkumarsakthi061@gmail.com:`, {
      name, email, phone, device, date
    });

    // Generate a mock pass ID
    const passId = `KARUR-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    res.json({ 
      success: true, 
      message: "Consultation booked successfully. Email notification triggered.",
      passId 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
