from .models import Todo
from faker import Faker

def generate_data():
    fake = Faker()
    for i in range(200):
        Todo.objects.create(task=fake.sentence()[:35], description=fake.text(), priority=fake.random_int(min=1, max=3), done=fake.boolean())
    
    print("completed")