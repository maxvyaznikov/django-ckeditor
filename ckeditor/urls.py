from django.conf.urls.defaults import patterns, url
from . import views

urlpatterns = patterns(
    '',
    url(r'^upload/', views.upload, name='ckeditor_upload'),
    url(r'^browse/', views.browse, name='ckeditor_browse'),
)
