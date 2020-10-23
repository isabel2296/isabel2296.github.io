//isabel silva 
//CWID: 891401754
//assig 1 CPSC 335
#include <cassert>

template <typename T>
class merge_sort {
public:
 static void sort(T* arr, size_t n, const comparator<T>& comp=fwd_comparator<T>()) {
     T * l = new T[n]; 
     assert(l != nullptr); 
     sort(arr, l, 0 , n - 1, comp); 
     delete[] l ;
 }
 private:
 //static const int CUTOFF = 7;
 static void sort(T* arr, T* aux, size_t low, size_t high, const comparator<T>& comp) {
     if (high <= low) return; 
     size_t mid = low + (high - low) /2; 
     sort(arr, aux, low, mid, comp); 
     sort(arr, aux, mid+ 1,high, comp); 
     merge(arr, aux, low, mid, high, comp); 
 }
 static void merge(T* arr, T* aux, size_t low, size_t mid, size_t high, const comparator<T>& comp){
     assert(is_sorted(arr, low, mid)); 
     assert(is_sorted(arr, mid+1, high)); 
     //copy to auc[]
     for(size_t k = low; k <= high; k++){
         aux[k] = arr[k];
     }
     //merge back to a[]
     size_t i = low; 
     size_t j = mid+1 ; 
     for (size_t k = low; k <= high; k++){
         if( i > mid) arr[k] = aux[j++]; 
         else if (j > high)   arr[k] = aux[i++]; 
         else if (aux[j]< aux[i]) arr[k] = aux[j++];
         else arr[k] = aux[i++];
     }
     //post condition: a[lo .. hi] is sorted
     assert(is_sorted(arr, low, high)); 
 };

};

template <typename T>
class merge_bu_sort {
public:
 //merge_bu_sort() = delete;
/*rearanges the arry in ascending order, using the natural order*/
 static void sort(T* arr, size_t n, const comparator<T>& comp=fwd_comparator<T>()){
     T * aux = new T[n]; 
     for( size_t len = 1; len < n; len *=2){
        for( size_t low = 0; low < n - len; low += len*2){
            size_t mid = low+len-1; 
            size_t high = std::min(low+len+len-1, (n == 0? 0 : n-1));
            merge(arr, aux, low, mid, high, comp); 
        }
     }
 }
private:
 static void merge(T* arr, T* aux, size_t low, size_t mid, size_t high, const comparator<T>& comp){
    //copy to aux[]
    for(size_t k = low; k <= high; k++ ) {
        aux[k]= arr[k];
    }
    //merge back to a[]
    size_t i = low; 
    size_t j = mid+1; 
    for(size_t k = low; k <= high; k ++ ){
        if (i > mid)
            arr[k] = aux[j++];
        else if (j > high) 
            arr[k] = aux[i++]; 
        else if (comp(aux[j] , aux[i]))
            arr[k] = aux[j++]; 
        else
            arr[k] = aux[i++]; 
    }
 }
};
