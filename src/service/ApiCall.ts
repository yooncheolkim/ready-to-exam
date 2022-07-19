import axios from "axios";

interface Body {
  a: string;
  b: string;
}

export interface MockData {
  url: string;
  title: string;
  id: number;
}

class ApiCall {
  public sampleApiCall = async (body: Body) => {
    // const result = await axios.get("/sample/url");

    const result = {
      data: [
        { url: "/resources/image (1).png", title: "1번입니다.", id: 1 },
        { url: "/resources/image.png", title: "2번입니다.", id: 2 },
        { url: "/resources/SPACE 복사본.jpeg", title: "3번입니다.", id: 3 },
      ],
    };
    return result.data;
  };
}
export const apiCalllInstance = new ApiCall();
