function figureArea(w, h, W, H) {
    w = +w;
    W = +W;
    h = +h;
    H = +H;

    let area1 = w * h;
    let area2 = W * H;

    let subtrW = 0;
    let subtrH = 0;

    if (W > w) {
        subtrW = w;
    } else {
        subtrW = W;
    }

    if (H > h) {
        subtrH = h;
    } else {
        subtrH = H;
    }

    let subtrArea = subtrH * subtrW;

    let area = (area1 + area2 - subtrArea);

    console.log(area);
}