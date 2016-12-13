# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-12 15:50
from __future__ import unicode_literals

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('miller', '0045_profile_date_last_notified'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[(b'editing', b'editing'), (b'blind', b'blind'), (b'double', b'double blind')], default=b'editing', max_length=8)),
                ('due_date', models.DateTimeField(blank=True, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_last_modified', models.DateTimeField(auto_now=True)),
                ('contents', models.TextField(blank=True, default=b'{\n "content": "", \n "title": ""\n}')),
                ('thematic', models.TextField(null=True)),
                ('thematic_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('interest', models.TextField()),
                ('interest_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('originality', models.TextField()),
                ('originality_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('innovation', models.TextField()),
                ('innovation_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('interdiciplinarity', models.TextField()),
                ('interdiciplinarity_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('methodology', models.TextField()),
                ('methodology_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('clarity', models.TextField()),
                ('clarity_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('argumentation', models.TextField()),
                ('argumentation_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('structure', models.TextField()),
                ('structure_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('references', models.TextField()),
                ('references_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('pertincence', models.TextField()),
                ('pertincence_score', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('assignee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='story',
            name='watchers',
        ),
        migrations.AddField(
            model_name='story',
            name='version',
            field=models.CharField(default=b'0.1', max_length=22),
        ),
        migrations.AlterField(
            model_name='comment',
            name='status',
            field=models.CharField(choices=[(b'pending', b'pending acceptation'), (b'private', b'accepted, privately visible'), (b'on review', b'from reviewer'), (b'public', b'accepted, publicly visible'), (b'deleted', b'deleted')], db_index=True, default=b'pending', max_length=10),
        ),
        migrations.AddField(
            model_name='review',
            name='story',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='miller.Story'),
        ),
    ]
