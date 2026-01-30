const BASE_PATH = "/hotstartvc-website";

export default function imageLoader({ src }: { src: string }) {
  return `${BASE_PATH}${src}`;
}
