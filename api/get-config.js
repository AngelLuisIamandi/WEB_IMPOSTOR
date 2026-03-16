export default function handler(request, response) {
  const url = process.env.BACKEND_URL;
  
  response.status(200).json({
    backendUrl: url
  });
}