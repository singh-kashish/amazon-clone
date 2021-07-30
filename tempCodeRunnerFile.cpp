#include<bits/stdc++.h>
using namespace std;

long long int solve(long long int n){
    long long int sum = 0;
    if(n%6==0){
        return (n/6*15);
    }
    else if(n%8==0){
        return (n/8*20);
    }
    else if(n%10==0)return (n/10*25);
    else{
        while(n>0){
        if(n==0)return sum;
        else if(n>=10){
            long long int rem = n%10;
            sum += 25*(n/10);
            n=rem;
        }
        else if(n<=6){
            return sum+15;
        }
        else if(n==7 or n==8)return sum+20;
        else return sum+35;
    }
    }
    return -1;
}
int main(){
    int t;
    cin>>t;
    while(t--){
        long long int n;
        cin>>n;
        cout<<solve(n)<<endl;
    }
    return 0;
}