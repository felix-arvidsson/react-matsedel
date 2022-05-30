from django.contrib import admin

from .models import Livsmedel, Recept, Ingredienser, Units

class IngredienserInline(admin.TabularInline):
    model = Ingredienser

class MeasureUnitInline(admin.TabularInline):
    model = Units

class UnitsCategoryAdmin(admin.ModelAdmin):
    inlines = [
        MeasureUnitInline,
    ]

class CategoryAdmin(admin.ModelAdmin):
    inlines = [
        IngredienserInline,
    ]

##Register your models here.
admin.site.register(Livsmedel, UnitsCategoryAdmin)
admin.site.register(Recept, CategoryAdmin)
admin.site.register(Ingredienser)
admin.site.register(Units)