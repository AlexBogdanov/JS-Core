function coneAreaAndVolume (r, h) {
    let v = Math.PI * Math.pow(r, 2) * (h / 3);
    let area = Math.PI * r * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)));

    console.log(`volume = ${v}`);
    console.log(`area = ${area}`);
}