# Generated by Django 4.1 on 2023-03-07 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Items', '0009_alter_minute_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='minute',
            name='Date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
