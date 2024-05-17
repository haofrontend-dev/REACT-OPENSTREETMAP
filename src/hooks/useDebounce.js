import React from "react";
import _ from "lodash";

const useDebounce = (callback, delay) => {
    // Sử dụng useMemo để đảm bảo hàm debounce chỉ được tạo lại khi callback hoặc delay thay đổi
    return React.useMemo(() => _.debounce(callback, delay), [callback, delay]);
};

export default useDebounce;
