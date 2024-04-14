import axiosInstance from './axiosConfig';

class AppServices {
  async getCityForcast({city, unit}: {city: string, unit: string}) {
    const res = await axiosInstance.post(
      `forecast?appid=${process.env.NEXT_PUBLIC_APP_ID}&q=${city}&units=${unit}&cnt=1&lang=en`
    );
    return res;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AppServices();
