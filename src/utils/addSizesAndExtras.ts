import {Data, Extras, Size} from '../types/DataType';

export default function addSizesAndExtras(data: Data) {
  data.types.map(type => {
    type.sizes = type.sizes.map(sizeId => {
      return data.sizes.find(size => size._id === sizeId.toString()) as Size;
    });
    type.extras = type.extras.map(extrasId => {
      return data.extras.find(
        extras => extras._id === extrasId.toString(),
      ) as Extras;
    });
  });
  return data;
}
