export function generateCode(codeSnippet) {
    switch (codeSnippet) {
        case 'boilerplate':
            return 'print("Hello, World!")';

        case 'breadthFirstSearch(BFS)':
            return 'from collections import defaultdict\n\n' +
                'class Graph:\n' +
                '    def __init__(self):\n' +
                '        self.graph = defaultdict(list)\n' +
                '\n' +
                '    def add_edge(self, u, v):\n' +
                '        self.graph[u].append(v)\n' +
                '\n' +
                '    def bfs(self, s):\n' +
                '        visited = [False] * (max(self.graph) + 1)\n' +
                '        queue = []\n' +
                '\n' +
                '        queue.append(s)\n' +
                '        visited[s] = True\n' +
                '\n' +
                '        while queue:\n' +
                '            s = queue.pop(0)\n' +
                '            print(s, end=" ")\n' +
                '\n' +
                '            for i in self.graph[s]:\n' +
                '                if not visited[i]:\n' +
                '                    queue.append(i)\n' +
                '                    visited[i] = True\n' +
                '\n' +
                'g = Graph()\n' +
                'g.add_edge(0, 1)\n' +
                'g.add_edge(0, 2)\n' +
                'g.add_edge(1, 2)\n' +
                'g.add_edge(2, 0)\n' +
                'g.add_edge(2, 3)\n' +
                'g.add_edge(3, 3)\n' +
                '\n' +
                'print("Breadth First Traversal (starting from vertex 2):")\n' +
                'g.bfs(2)\n';

        case 'insertionSort':
            return '# Implementation of Insertion Sort in Python\n\n' +
                'def insertion_sort(arr):\n' +
                '    for i in range(1, len(arr)):\n' +
                '        key = arr[i]\n' +
                '        j = i - 1\n' +
                '        while j >= 0 and key < arr[j]:\n' +
                '            arr[j + 1] = arr[j]\n' +
                '            j -= 1\n' +
                '        arr[j + 1] = key\n\n' +
                '# Example usage:\n' +
                'arr = [12, 11, 13, 5, 6]\n' +
                'insertion_sort(arr)\n' +
                'print("Sorted array:", arr)';


        case 'quickSort':
            return '# Python program for implementation of Quicksort\n\n' +
                'def quickSort(arr):\n' +
                '    if len(arr) <= 1:\n' +
                '        return arr\n' +
                '    else:\n' +
                '        pivot = arr[0]\n' +
                '        less = [x for x in arr[1:] if x <= pivot]\n' +
                '        greater = [x for x in arr[1:] if x > pivot]\n' +
                '        return quickSort(less) + [pivot] + quickSort(greater)\n' +
                '\n' +
                '# Driver code to test above\n' +
                'arr = [10, 7, 8, 9, 1, 5]\n' +
                'print("Original array:", arr)\n' +
                'sorted_arr = quickSort(arr)\n' +
                'print("Sorted array:", sorted_arr)';
        default:
            return 'Invalid code snippet for Python';
    }
}
