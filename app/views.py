from django.shortcuts import render, redirect
from app.forms import PersonForm
from app.models import Person
from django.core.paginator import Paginator

# Create your views here.
def home(request):
	data = {}
	search = request.GET.get('search')
	if search:
		data['db'] = Person.objects.filter(nome__icontains=search)
	else:
		data['db'] = Person.objects.all()
		all = Person.objects.all() #Isso faz paginação!
		paginator = Paginator(all, 50) #Isso faz paginação!
		pages = request.GET.get('page') #Isso faz paginação!
		data['db'] = paginator.get_page(pages)#Isso faz paginação!
	return render(request, 'index.html', data) #Isso vai puxar o arquivo index, da pasta 'templates' e para puxar um dicionário deve ser adicionado o nome do dicionário ao final, por exemplo: return render(request, 'index.html', data)


def form(request):
	data = {}
	data['form'] = PersonForm()
	return render(request, 'form.html', data)


def create(request):
	form = PersonForm(request.POST or None)
	if form.is_valid():
		form.save()
		return redirect('form') #SE NÃO CONSEGUIR RESOLVER O ROLÊ DO AJAX, TEM QUE TROCAR ISSO AQUI PRA 'form' PRA CARREGAR A PÁGINA E OS DADOS SEREM APAGADOS DO FORMULÁRIO


def view(request, pk):
	data = {}
	data['db'] = Person.objects.get(pk=pk)
	return render(request, 'view.html', data)


def edit(request, pk):
	data = {}
	data['db'] = Person.objects.get(pk=pk)
	data['form'] = PersonForm(instance=data['db'])
	return render(request, 'form.html', data)


def update(request, pk):
	data = {}
	data['db'] = Person.objects.get(pk=pk)
	form = PersonForm(request.POST or None, instance=data['db'])
	if form.is_valid():
		form.save()
		return redirect('home')


def delete(request, pk):
	db = Person.objects.get(pk=pk)
	db.delete()
	return redirect('home')


def mapaaa(request):
	return render(request, 'mapaaa.html')

