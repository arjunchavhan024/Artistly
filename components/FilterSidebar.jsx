'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { categories, locations, priceRanges } from '@/data/mockData';

export default function FilterSidebar({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handleCategoryChange = (categoryId, checked) => {
    const updated = checked 
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter(id => id !== categoryId);
    setSelectedCategories(updated);
    updateFilters(updated, selectedLocations, selectedPriceRanges);
  };

  const handleLocationChange = (location, checked) => {
    const updated = checked 
      ? [...selectedLocations, location]
      : selectedLocations.filter(loc => loc !== location);
    setSelectedLocations(updated);
    updateFilters(selectedCategories, updated, selectedPriceRanges);
  };

  const handlePriceRangeChange = (priceRange, checked) => {
    const updated = checked 
      ? [...selectedPriceRanges, priceRange]
      : selectedPriceRanges.filter(range => range !== priceRange);
    setSelectedPriceRanges(updated);
    updateFilters(selectedCategories, selectedLocations, updated);
  };

  const updateFilters = (cats, locs, prices) => {
    onFilterChange({
      categories: cats,
      locations: locs,
      priceRanges: prices
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedLocations([]);
    setSelectedPriceRanges([]);
    onFilterChange({ categories: [], locations: [], priceRanges: [] });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category.id, checked)
                }
              />
              <label 
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.icon} {category.name}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Locations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Locations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox
                id={location}
                checked={selectedLocations.includes(location)}
                onCheckedChange={(checked) => 
                  handleLocationChange(location, checked)
                }
              />
              <label 
                htmlFor={location}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {location}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Ranges */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <Checkbox
                id={range}
                checked={selectedPriceRanges.includes(range)}
                onCheckedChange={(checked) => 
                  handlePriceRangeChange(range, checked)
                }
              />
              <label 
                htmlFor={range}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {range}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}