# Jest 에서의 Mock/Spy/Stub 설정 및 초기화

Jest를 통해 여러 테스트를 작성하다보면 테스트 대역 (Mock/Spy/Stub) 등을 사용할때가 종종 있습니다.  
이들은 직접적으로 테스트 환경 구축에서 사용하긴 어려운 부분을 모의 객체 혹은 모의 행위로 교체해주는 역할을 하는데요.  

> 그렇다고해서 테스트대역을 권장하진 않습니다.  
> 보통 이처럼 테스트더블을 사용해서 테스트 대상을 격리화 하는 방향은 몇가지 문제가 있어 저는 선호하는 방식은 아닙니다.




* 일반적으로는 `beforeXXX` 에서는 테스트를 위한 자원할당을, `afterXXX` 에서는 할당된 자원 회수 작업을 한다.
* 상황에 따라 (레거시 혹은 기존 테스트 환경의 불안정성) `beforeXXX` 에서 테스트 환경 설정 (`Table` clear 등)을 진행하기도 한다.
* 다만 `beforeXXX` 에서 `given` 처리는 추천하지 않는다.
  * 참고: https://jojoldu.tistory.com/611


## Mock/Spy 구현 (mockImplementation, mockImplementationOnce)



