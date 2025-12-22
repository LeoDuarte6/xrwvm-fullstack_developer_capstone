from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from djangoapp import views
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djangoapp/', include('djangoapp.urls')),
    
    # React app routes
    path('', TemplateView.as_view(template_name="index.html")),
    path('login/', TemplateView.as_view(template_name="index.html")),
    path('register/', TemplateView.as_view(template_name="index.html")),
    
    # Django template routes (Module 1 - these render the nice Bootstrap pages)
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]

# Serve static files
urlpatterns += static('/static/', document_root=os.path.join(settings.BASE_DIR, 'static'))
