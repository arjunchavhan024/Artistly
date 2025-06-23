import Image from 'next/image';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ArtistCard({ artist, layout = 'grid' }) {
  if (layout === 'list') {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={artist.profileImage}
                alt={artist.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 truncate">{artist.name}</h3>
                {artist.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
              </div>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                <span>{artist.category.join(', ')}</span>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {artist.location}
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-400" />
                  {artist.rating}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">{artist.priceRange}</p>
              <Button size="sm" className="mt-2">Ask for Quote</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={artist.profileImage}
            alt={artist.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {artist.verified && (
            <div className="absolute top-3 right-3">
              <CheckCircle className="w-5 h-5 text-blue-500 bg-white rounded-full" />
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg text-gray-900">{artist.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{artist.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {artist.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs capitalize">
                {cat}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            {artist.location}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-purple-600">{artist.priceRange}</span>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Ask for Quote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}