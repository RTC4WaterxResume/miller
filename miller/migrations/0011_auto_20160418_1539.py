# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-18 15:39
from __future__ import unicode_literals

from django.db import migrations, models
import miller.models.document


class Migration(migrations.Migration):

    dependencies = [
        ('miller', '0010_auto_20160412_1037'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='document',
            options={'ordering': ['-id']},
        ),
        migrations.AlterField(
            model_name='document',
            name='attachment',
            field=models.FileField(blank=True, null=True, upload_to=miller.models.document.attachment_file_name),
        ),
        migrations.AlterField(
            model_name='document',
            name='contents',
            field=models.TextField(blank=True, default=b'', null=True),
        ),
        migrations.AlterField(
            model_name='document',
            name='copyrights',
            field=models.TextField(blank=True, default=b'', null=True),
        ),
        migrations.AlterField(
            model_name='document',
            name='type',
            field=models.CharField(choices=[(b'bibtex', b'bibtex'), (b'video-cover', b'video interview'), (b'video', b'video'), (b'picture', b'picture'), (b'pdf', b'pdf')], max_length=24),
        ),
        migrations.AlterField(
            model_name='story',
            name='slug',
            field=models.CharField(blank=True, max_length=140, unique=True),
        ),
    ]
