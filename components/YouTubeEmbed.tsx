type Props = {
  videoId?: string;
  title: string;
  placeholderText?: string;
};

export default function YouTubeEmbed({ videoId, title, placeholderText }: Props) {
  if (!videoId) {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
        <div className="aspect-video w-full px-6 py-8 md:px-10 md:py-10">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-slate-800">Short Overview of This Situation</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              {placeholderText ??
                "A brief video overview will be added here to walk through this pathway and the first steps to take."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const src =
    videoId === "5320WX00aqg"
      ? "https://www.youtube.com/embed/5320WX00aqg?si=KnuUT11_5Q_MeaJx"
      : `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft bg-white">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
