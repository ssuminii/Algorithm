function solution(bandage, health, attacks) {
    const time = attacks.at(-1)[0];
    const originHealth = health;
    let continuous = [];
    
    for(let i=1; i <= time; i++) {
        let attacked = false;

        for (let j = 0; j < attacks.length; j++) {
            if (i === attacks[j][0]) {
                health -= attacks[j][1];
                attacked = true;
                continuous = [];
                if (health <= 0) {
                    return -1;
                }
                break;
            }
        }

        if (!attacked) {
            health += bandage[1];
            if (health > originHealth) {
                health = originHealth;
            }
            continuous.push(0);

            if(continuous.length === bandage[0]) {
                health += bandage[2];
                if (health > originHealth) {
                    health = originHealth;
                }
                continuous = [];
            }
        }
    }
    return health <= 0 ? -1 : health;
}