# Generated by Django 4.1 on 2023-03-08 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Items', '0017_alter_college_email_alter_school_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='Location',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='school',
            name='Location',
            field=models.CharField(max_length=20),
        ),
    ]
