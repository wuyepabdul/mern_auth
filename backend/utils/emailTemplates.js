import { log } from "console";

export const welcomeTemplate = (user, linkUrl) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Welcome </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 10px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    }

    .header {
      background: #0c962a;
      padding: 20px;
      text-align: center;
      color: #fff;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .content {
      padding: 10px 20px;
      text-align: left;
      line-height: 1.6;
    }

    .content h2 {
      font-size: 18px;
      margin-top: 0;
      color: #333;
    }

    .code-box {
      display: block;
      /* width: 100%; */
      text-align: center;
      padding: 10px;
      background: #111;
      color: #fff;
      font-size: 16px;
      letter-spacing: 10px;
      font-weight: 500;
      margin: 0 auto;
    }


    .verify {
      display: block;
      width: 50%;
      text-align: center;
      margin: 0 auto;
      padding: 12px 20px;
      /* margin: 20px 0; */
      background: #0c962a;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }

    .verify a{
      color:white;
    }



    .footer {
      font-size: 13px;
      text-align: center;
      padding: 15px;
      background: #f1f1f1;
      color: #666;
    }

    @media screen and (max-width: 600px) {

      .content,
      .header,
      .footer {
        padding: 15px;
      }

      .verify {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Account Created Successfully</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${user.name}</strong>,</p>

      <p>We’re excited to have you on board! Your account has been created successfully, and you’re all set to log in to
        your account.</p>


      <p style="text-align:center;">
        <a href='${linkUrl}' class="verify">Login</a>
      </p>

      <p>If the button doesn’t work, copy and paste this link into your browser:</p>
      <p style="word-break:break-word;">
        <a href="localhost:3000/dashboard" style="color:#0ea5a0;">localhost:3000/dashboard</a>
      </p>

      <p>If you didn’t sign up, please ignore this email.</p>
      <p>Best Regards</p>
      <p>Your App Team</p>

    </div>

    <div class="footer">
      <p>© ${new Date().getFullYear()} MERN-Auth. All rights reserved.</p>
    </div>
  </div>
</body>

</html>`;
};

export const verificationTemplate = (user, linkUrl) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Account Verification</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 10px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    }

    .header {
      background: #0c962a;
      padding: 20px;
      text-align: center;
      color: #fff;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .content {
      padding: 10px 20px;
      text-align: left;
      line-height: 1.6;
    }

    .content h2 {
      font-size: 18px;
      margin-top: 0;
      color: #333;
    }

    .code-box {
      display: block;
      /* width: 100%; */
      text-align: center;
      padding: 10px;
      background: #111;
      color: #fff;
      font-size: 16px;
      letter-spacing: 10px;
      font-weight: 500;
      margin: 0 auto;
    }


    .verify {
      display: block;
      width: 50%;
      text-align: center;
      margin: 0 auto;
      padding: 12px 20px;
      background: #0c962a;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }

      .verify a{
                color: white;
      }


    .footer {
      font-size: 13px;
      text-align: center;
      padding: 15px;
      background: #f1f1f1;
      color: #666;
    }

    @media screen and (max-width: 600px) {

      .content,
      .header,
      .footer {
        padding: 15px;
      }

      .verify {
        display: block;
        width: 100%;
        text-align: center;
        
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Account Verification</h1>
    </div>
    <div class="content">

      <p>Hi <strong>${user.name}</strong>,</p>
      <p>Thanks for registering. Use the code below to verify your account. This code expires in <strong>30
          minutes</strong>.</p>

      <p style="text-align:center;">
      <div class="code-box">${user.verificationToken}</div>
      </p>

      <p style="text-align:center;">
        <a href="${linkUrl}" class="verify">Verify My Account</a>
      </p>


      <p>If the button doesn’t work, copy and paste this link into your browser:</p>
      <p style="word-break:break-word;">
        <a href="${linkUrl}" style="color:#0ea5a0;">${linkUrl}</a>
      </p>

      <p>If you didn’t sign up, please ignore this email.</p>
      <p>Best Regards</p>
      <p>Your App Team</p>

    </div>

    <div class="footer">
      <p>© ${new Date().getFullYear()} MERN-Auth. All rights reserved.</p>
    </div>
  </div>
</body>

</html>`;
};

export const passwordResetTemplate = (user, linkUrl) => {
  return `
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Password Reset Request</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 10px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    }

    .header {
      background: #0c962a;
      padding: 20px;
      text-align: center;
      color: #fff;
    }

    .header h1 {
      margin: 0;
      font-size: 22px;
    }

    .content {
      padding: 20px;
      text-align: left;
      line-height: 1.6;
    }

    .content h2 {
      font-size: 18px;
      margin-top: 0;
      color: #333;
    }

    .button {
      display: block;
      width: 50%;
      text-align: center;
      margin: 0 auto;
      padding: 12px 20px;
      /* margin: 20px 0; */
      background: #0c962a;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }

    .footer {
      font-size: 13px;
      text-align: center;
      padding: 15px;
      background: #f1f1f1;
      color: #666;
    }

    @media screen and (max-width: 600px) {

      .content,
      .header,
      .footer {
        padding: 15px;
      }

      .button {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${user.name}</strong>,</p>
      <p>We received a request to reset your password. Use the code below to reset it. This code will expire in
        <strong>${30} minutes</strong>.
      </p>

      <p style="text-align:center;">
        <a href="${linkUrl}" class="button">Reset My Password</a>
      </p>

      <p>If the button doesn’t work, copy and paste this link into your browser:</p>
      <p style="word-break:break-word;">
        <a href="${linkUrl}" style="color:#0ea5a0;">${linkUrl}</a>
      </p>

      <p>If you didn’t request a password reset, you can ignore this email </p>
    </div>

    <div class="footer">
      <p>© ${new Date().getFullYear()} MERN-Auth. All rights reserved.</p>
    </div>
  </div>
</body>

  </html>`;
};

export const passwordResetSuccessfulTemplate = (user, linkUrl) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Password Reset Successful</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      background-color: #f5f7fa;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 10px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      
    }
    .header {
      background: #0c962a;
      padding: 20px;
      text-align: center;
      color: #fff;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 20px;
      text-align: left;
      line-height: 1.6;
    }
    .content h2 {
      font-size: 18px;
      margin-top: 0;
      color: #333;
    }
    .button {
      display: block;
      width: 50%;
      text-align: center;
      margin:0 auto;
      padding: 12px 20px;
      /* margin: 20px 0; */
      background: #0c962a;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }
    .footer {
      font-size: 13px;
      text-align: center;
      padding: 15px;
      background: #f1f1f1;
      color: #666;
    }
    @media screen and (max-width: 600px) {
      .content, .header, .footer {
        padding: 15px;
      }
      .button {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="content">
      <h2>Hello ${user.name},</h2>
      <p>Your password has been successfully reset. You can now log in to your account using your new password.</p>
      <p>If you did not perform this action, please secure your account immediately by contacting our support team.</p>
      <a href="${linkUrl}" class="button">Login Now</a>
      <p>Thank you,<br> The Support Team</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

  `;
};
