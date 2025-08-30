const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const formData = JSON.parse(event.body);
    
    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Greenprint Contact <onboarding@resend.dev>',
      to: ['bferrell514@gmail.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a27;">New Contact Form Submission</h2>
          
          <div style="background: #f8fffe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5a27; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
            <h3 style="color: #2d5a27; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #2d5a27; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">
              This message was sent from the Greenprint Start Up Consulting contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({ error: 'Failed to send email' })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ success: true, data })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
