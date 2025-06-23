"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Grid, List, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ArtistCard from "@/components/ArtistCard";
import FilterSidebar from "@/components/FilterSidebar";
import { mockArtists } from "@/data/mockData";
import Loader from "@/components/Loader";

function ArtistListingContent() {
  const searchParams = useSearchParams();
  const [artists, setArtists] = useState(mockArtists);
  const [filteredArtists, setFilteredArtists] = useState(mockArtists);
  const [layout, setLayout] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      const filtered = mockArtists.filter((artist) =>
        artist.category.includes(category)
      );
      setFilteredArtists(filtered);
    }
  }, [searchParams]);
  if (loading) return <Loader />;

  const handleFilterChange = (filters) => {
    let filtered = mockArtists;

    if (filters.categories.length > 0) {
      filtered = filtered.filter((artist) =>
        artist.category.some((cat) => filters.categories.includes(cat))
      );
    }

    if (filters.locations.length > 0) {
      filtered = filtered.filter((artist) =>
        filters.locations.includes(artist.location)
      );
    }

    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter((artist) =>
        filters.priceRanges.includes(artist.priceRange)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artist.category.some((cat) =>
            cat.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          artist.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArtists(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    let filtered = mockArtists;

    if (query) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(query.toLowerCase()) ||
          artist.category.some((cat) =>
            cat.toLowerCase().includes(query.toLowerCase())
          ) ||
          artist.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredArtists(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Browse Artists
          </h1>
          <p className="text-gray-600">
            Discover talented performers for your next event
          </p>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search artists, categories, or locations..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="flex border rounded-lg overflow-hidden">
              <Button
                variant={layout === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLayout("grid")}
                className="rounded-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={layout === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLayout("list")}
                className="rounded-none border-l"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`w-80 flex-shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <FilterSidebar onFilterChange={handleFilterChange} />
          </aside>

          {/* Artists Grid/List */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredArtists.length} artist
                {filteredArtists.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No artists found matching your criteria
                </p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              <div
                className={
                  layout === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} layout={layout} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtistListing() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtistListingContent />
    </Suspense>
  );
}
