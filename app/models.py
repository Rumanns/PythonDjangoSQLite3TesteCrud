from django.db import models

# Create your models here.
class Person(models.Model):
	nome = models.CharField(max_length=150)
	CPF = models.CharField(max_length=11)
	ano = models.IntegerField()

