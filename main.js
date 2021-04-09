// min 이상 max 이하인 정수 난수 생성 함수
function getRandomInt(min, max)
{
    min = Math.ceil(min); // Math.ceil(): 인자보다 크거나 같은 최소 정수 반환
    max = Math.floor(max); // Math.floor(): 인자보다 작거나 같은 최대 정수 반환
    return Math.floor(Math.random() * (max - min + 1)) + min; // Math.random(): 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환. 암호학적으로 안전한 난수를 제공하지는 않음
}

// 플레이어 생성자 함수
function Player(tribe)
{
    this.life = 30; // 생명력
    this.tribe = tribe; // alien, devil, normal, cat
    this.count = 3; // 주사위 개수(this.dice의 요소 개수)
    this.dice = [6, 6, 6]; // 주사위 별 눈의 최대값
}

var person1 = new Player('normal');
var person2 = new Player('devil');

// 전투 예시(플레이어 한 명 게임오버 될 때까지 전투)
var war = 1;
while (0 < person1.life && 0 < person2.life)
{
    console.log(war + '번째 전투');

    // 한 플레이어의 주사위가 모두 패배할 때까지 전투
    var i = 0;
    var j = 0;
    var damage;
    while (i < person1.count && j < person2.count)
    {
        var a = getRandomInt(1, person1.dice[i])
        var b = getRandomInt(1, person2.dice[j])

        console.log(person1.tribe + ' ' + (i + 1) + '번 주사위의 눈: ' + a);
        console.log(person2.tribe + ' ' + (j + 1) + '번 주사위의 눈: ' + b);

        if (b < a)
        {
            console.log(person1.tribe + ' 승리!');
            j++;
        }
        else if (a < b)
        {
            console.log(person2.tribe + ' 승리!');
            i++;
        }
        else
            console.log('비겼습니다.');
    }

    // 남은 주사위 눈의 총합만큼 상대 플레이어에게 피해
    damage = 0;
    if (i == person1.count)
    {
        var c = 0;

        while (c < person2.count - j)
        {
            damage += person2.dice[c];
            c++;
        }
        
        console.log(person2.tribe + '이 ' + person1.tribe + '에게 ' + damage + '만큼 피해를 줍니다.');
        person1.life -= damage;
    }
    else // (j == person2.count)
    {
        var c = 0;

        while (c < person1.count - i)
        {
            damage += person1.dice[c];
            c++;
        }

        console.log(person1.tribe + '이 ' + person2.tribe + '에게 ' + damage + '만큼 피해를 줍니다.');
        person2.life -= damage;
    }

    // 한 플레이어의 life가 0이 되면 게임 오버
    if (person1.life <= 0)
    {
        console.log(person1.tribe + ' 게임 오버');
        break;
    }
    if (person2.life <= 0)
    {
        console.log(person2.tribe + ' 게임 오버');
        break;
    }
    war++;
}

console.log('끝');