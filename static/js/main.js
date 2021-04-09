var person1, person2; // 플레이어와 상대 플레이어
var myTribe, enemyTribe; // 플레이어와 상대 플레이어의 종족
var tribeList = ['normal', 'devil', 'cat', 'alien']; // 종족 목록

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
    this.tribe = tribe; // 종족
    this.count = 3; // 주사위 개수(this.dice의 요소 개수)
    this.dice = [6, 6, 6]; // 주사위 별 눈의 최대값
}

// 전투 함수
function battle()
{
    // 현재 함수를 실행하면 html 태그가 전부 날아가서 폰트 적용이 되지 않아 index.html 처음부터 head 태그 끝까지 직접 입력함
    document.write('<!DOCTYPE html><html><head><title>Dice war</title><link rel="stylesheet" href="static/css/style.css"></head>');

    person1 = new Player(myTribe); // 플레이어
    // 상대 플레이어를 플레이어와 다른 종족으로 설정
    enemyTribe = myTribe;
    while (enemyTribe == myTribe)
        enemyTribe = tribeList[getRandomInt(0, 3)];
    person2 = new Player(enemyTribe);
    document.write(myTribe + ' 주사위! 그 상대는... ' + enemyTribe + ' 주사위!<br><br>');

    // 전투 예시(플레이어 한 명 게임오버 될 때까지 전투)
    var war = 1;
    while (0 < person1.life && 0 < person2.life)
    {
        document.write(war + '번째 전투' + '<br>');

        // 한 플레이어의 주사위가 모두 패배할 때까지 전투
        var i = 0;
        var j = 0;
        var damage;
        while (i < person1.count && j < person2.count)
        {
            var a = getRandomInt(1, person1.dice[i])
            var b = getRandomInt(1, person2.dice[j])

            document.write(person1.tribe + ' ' + (i + 1) + '번 주사위의 눈: ' + a + '<br>');
            document.write(person2.tribe + ' ' + (j + 1) + '번 주사위의 눈: ' + b + '<br>');

            if (b < a)
            {
                document.write(person1.tribe + ' 승리!' + '<br>');
                j++;
            }
            else if (a < b)
            {
                document.write(person2.tribe + ' 승리!' + '<br>');
                i++;
            }
            else
                document.write('비겼습니다.' + '<br>');
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
            
            document.write(person2.tribe + '이 ' + person1.tribe + '에게 ' + damage + '만큼 피해를 줍니다.' + '<br><br>');
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

            document.write(person1.tribe + '이 ' + person2.tribe + '에게 ' + damage + '만큼 피해를 줍니다.' + '<br><br>');
            person2.life -= damage;
        }

        // 한 플레이어의 life가 0이 되면 게임 오버
        if (person1.life <= 0)
        {
            document.write(person1.tribe + ' 게임 오버' + '<br>');
            break;
        }
        if (person2.life <= 0)
        {
            document.write(person2.tribe + ' 게임 오버' + '<br>');
            break;
        }
        war++;
    }
}