import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function CategoryCard({ category }) {
  return (
    <Link href={`/artists?category=${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-purple-200">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}