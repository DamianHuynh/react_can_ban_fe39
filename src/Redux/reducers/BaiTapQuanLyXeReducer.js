//state mac dinh cua reducer
const stateModal = {
  thongTinXe: {
    maSP: 1,
    tenSP: "black car",
    hinhAnh: "./CarBasic/products/black-car.jpg",
    gia: 1000,
  },
};

const BaiTapQuanLyXeReducer = (state = stateModal, action) => {
  switch (action.type) {
    case "XEM_CHI_TIET": {
      return {
        ...state,
        thongTinXe: {
          ...action.thongTinXe,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default BaiTapQuanLyXeReducer;
