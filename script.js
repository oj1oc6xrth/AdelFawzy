document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  window.location.href = 'index.html';

  // هنا يمكنك إضافة رمز للتحقق من صحة اسم المستخدم وكلمة المرور
  // وإرسال طلب إلى الخادم للتحقق من صحة التفاصيل المقدمة

  console.log('Username:', username);
  console.log('Password:', password);
});