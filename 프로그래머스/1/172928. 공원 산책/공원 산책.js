function solution(park, routes) {
    let array = [0, 0];
    const direction = {
        'E': [0, 1],
        'W': [0, -1],
        'S': [1, 0],
        'N': [-1, 0]
    };

    // 시작
    for (i = 0; i < park.length; i++) {
        for (j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                array = [i, j];
            }
        }
    }

    for (let route of routes) {
        const [dir, dis] = route.split(' '); // ['E', '2']
        const [x, y] = direction[dir];
        let newArr = [...array];
        // console.log(newArr);
        
        let move = true;

        for (i = 0; i < Number(dis); i++) {
            newArr[0] += x;
            newArr[1] += y;

            // 이상한 길
            if (newArr[0] < 0 || newArr[0] >= park.length || 
                newArr[1] < 0 || newArr[1] >= park[0].length || 
                park[newArr[0]][newArr[1]] === 'X') {
                move = false;
                break;
            }
        }

        if (move) {
            array = newArr;
        }
    }

    return array;
}