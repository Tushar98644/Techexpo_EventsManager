# Generated by Django 4.1 on 2023-03-08 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Items', '0018_alter_college_location_alter_school_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='Location',
            field=models.CharField(max_length=14),
        ),
        migrations.AlterField(
            model_name='school',
            name='Location',
            field=models.CharField(max_length=14),
        ),
    ]
