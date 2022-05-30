# Generated by Django 4.0.4 on 2022-05-29 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Livsmedel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('namn', models.CharField(max_length=30)),
                ('kcal', models.FloatField(default=0)),
                ('prot', models.FloatField(blank=True, default=0)),
                ('carb', models.FloatField(blank=True, default=0)),
                ('fat', models.FloatField(blank=True, default=0)),
            ],
        ),
    ]
