from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages

def home(request):
    return render(request, 'home.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Send email
        try:
            send_mail(
                f'Contact Form: {subject}',
                f'Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}',
                email,
                ['admin@forexhub.com'],
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent successfully!')
        except Exception as e:
            messages.error(request, 'Error sending message. Please try again.')
    
    return render(request, 'contact.html')
