function solution(price) {
    let discount = 0;

    if (price >= 100000 && price < 300000) {
        discount = price * 0.05;
    } else if (price >= 300000 && price < 500000) {
        discount = price * 0.1;
    } else if (price >= 500000) {
        discount = price * 0.2;
    }

    return Math.floor(price - discount);
}