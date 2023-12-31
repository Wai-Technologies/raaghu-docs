import type { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import type { Observable, PartialObserver } from 'rxjs';
import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionService implements OnDestroy {
  private subscription = new Subscription();

  get isClosed() {
    return this.subscription.closed;
  }

  addOne<T>(
    source$: Observable<T>,
    next?: (value: T) => void,
    error?: (error: any) => void,
  ): Subscription;
  addOne<T>(source$: Observable<T>, observer?: PartialObserver<T>): Subscription;
  addOne<T>(
    source$: Observable<T>,
    nextOrObserver?: PartialObserver<T> | Next<T>,
    error?: (error: any) => void,
  ): Subscription {
    const subscription = source$.subscribe(nextOrObserver as Next<T>, error);
    this.subscription.add(subscription);
    return subscription;
  }

  closeAll() {
    this.subscription.unsubscribe();
  }

  closeOne(subscription: Subscription | undefined | null) {
    this.removeOne(subscription);
    if (subscription) {
      subscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeOne(subscription: Subscription | undefined | null) {
    if (!subscription) return;
    this.subscription.remove(subscription);
  }

  reset() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }
}

type Next<T> = (value: T) => void;
