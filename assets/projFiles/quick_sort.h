//isabel silva 
//CWID: 891401754
// contact: isabel_silva@csu.fullerton.edu
//cpsc335 assigment 2 
//contains quick_sort and quick_sort3way

#include "utils.h"
#include <cassert>
#include "insertion_sort.h"

#include "random.h"


template <typename T>
class quick_sort {
public: 
    static void sort(T* arr, size_t n, const comparator<T>& comp=fwd_comparator<T>()) {
        std_random<T>::shuffle(arr,n);
        sort(arr, 0, n-1, comp); 
         }

private: 
    static void sort(T * arr, size_t lo, size_t hi,const comparator<T>& comp=fwd_comparator<T>()){
        if(hi <= lo) return; 
        size_t j = partition(arr, lo, hi); 
        sort(arr, lo, (j == 0 ? 0 : j-1)); 
        sort(arr, j+1, hi); 
        assert(is_sorted(arr, lo, hi));

    }
    static size_t partition (T* arr, size_t lo, size_t hi, const comparator<T>& comp = fwd_comparator<T>()){
        size_t i = lo;
        size_t j = hi + 1; 
        T v = arr[lo]; 
        while(true){
            while (arr[++i] < v){
                if(i == hi) break;
            }
            while (v < arr[--j]){
                if(j == lo) break;
            }
            if (i >= j) break;

            exch(arr, i, j);
        }
    exch(arr, lo, j);
    return j;   
    }
    static void exch(T* arr, size_t i, size_t j)
    {
        T swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }
    

}; 

template <typename T> 
class quick_sort_3way {
public: 
 static void sort(T* arr, size_t n, const comparator<T>& comp=fwd_comparator<T>()) {
        std_random<T>::shuffle(arr,n);
        sort(arr, 0, n-1, comp); 
         }
private: 
    static void sort(T* arr, size_t lo, size_t hi, const comparator<T>&comp = fwd_comparator<T>()){
        if( hi <= lo) return; 
       
        size_t lt = lo;
        size_t gt = hi;
        T v = arr[lo];
        size_t i = lo+1; 
        while( i <= gt){
            if (comp(arr[i], v))
                exch(arr, lt++, i++); 
            else if (comp(v,arr[i]))
                exch(arr, i, gt--); 
            else 
                i++; 
        } 
        sort(arr, lo, (lt == 0 ? 0 : lt-1));
        sort(arr, gt+1, hi);
        //assert(is_sorted(arr, lo, hi));

    }

    static void exch(T* arr, size_t i, size_t j)
    {
        T swap = arr[i];
        arr[i] = arr[j]; 
        arr[j] = swap; 
    }
};
