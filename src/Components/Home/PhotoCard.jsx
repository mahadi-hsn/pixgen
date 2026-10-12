import { CircleFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photo }) => {
  console.log(photo);
  return (
    <div>
      <Card className="col-span-12 min-h-50 overflow-hidden rounded-3xl lg:col-span-6">
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
            <Chip className="text-lg py-2 font-semibold tracking-wide">{photo.title}</Chip>
          </Card.Title>
          <Card.Description>
            <Chip  className="text-sm leading-5 font-medium" color="warning">
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
          <Link href={`/all-photos/${photo.id}`}>
          <Button className="bg-white text-black" size="sm" variant="tertiary">
            View Details
          </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PhotoCard;
