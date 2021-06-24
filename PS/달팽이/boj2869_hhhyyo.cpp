#include <stdio.h>

int main() {

    int a, b, v;

    scanf("%d %d %d", &a, &b, &v);

    int d = 1;

    if ((v - a) % (a - b) == 0)
        d += (v - a) / (a - b);
    else
        d += (v - a) / (a - b) + 1;

    printf("%d", d);
    
    return 0;
}
