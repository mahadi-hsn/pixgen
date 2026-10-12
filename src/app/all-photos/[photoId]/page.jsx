import { CircleFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  "use cache";
  const { photoId } = await params;
  const res = await fetch("https://pixgen-plum.vercel.app/data.json", {
    cache: "no-cache",
  });
  const photos = await res.json();
  const photo = photos.find((p) => p.id == photoId);
  console.log(photo);
  return (
    <div>
      <Card className="min-h-screen overflow-hidden rounded-3xl">
        {/* Background image */}
        <Image
          alt={photo.title}
          width={500}
          height={500}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src={photo.imageUrl}
        />
        {/* Header */}
        <Card.Header className="z-10 space-y-2">
          <Card.Title>
            <Chip className="text-lg py-2 font-semibold tracking-wide">
              {photo.title}
            </Chip>
          </Card.Title>
          <Card.Description>
            <Chip className="text-sm leading-5 font-medium" color="warning">
              <CircleFill width={6} />
              <Chip.Label> {photo.category}</Chip.Label>
            </Chip>
          </Card.Description>
        </Card.Header>
        {/* Footer */}
        <Card.Footer className="z-10 mt-auto flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-black">Available soon</div>
            <div className="text-xs text-black/60">Get notified</div>
          </div>
          <Link href={`/all-photos`}>
            <Button
              className="bg-white text-black"
              size="sm"
              variant="tertiary"
            >
              Go Back
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;
