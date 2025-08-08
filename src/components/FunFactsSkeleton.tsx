import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb } from 'lucide-react';

export function FunFactsSkeleton() {
  return (
    <Card className="bg-accent/10 border-accent/30 mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-accent">
          <Lightbulb className="h-6 w-6" />
          Fun Facts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[95%]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[85%]" />
        </div>
      </CardContent>
    </Card>
  );
}
