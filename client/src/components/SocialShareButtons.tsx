import { Share2, Facebook, Twitter, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function SocialShareButtons({ title, url, description }: SocialShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`,
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("facebook")}
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("twitter")}
          className="border-sky-500 text-sky-500 hover:bg-sky-50"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("linkedin")}
          className="border-blue-700 text-blue-700 hover:bg-blue-50"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("pinterest")}
          className="border-red-600 text-red-600 hover:bg-red-50"
          title="Share on Pinterest"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
