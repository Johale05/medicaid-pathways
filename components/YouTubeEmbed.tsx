type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeEmbed({ videoId, title }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
